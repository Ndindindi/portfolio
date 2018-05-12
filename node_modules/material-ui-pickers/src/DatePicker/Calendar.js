var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';

import Moment from 'moment';
import { extendMoment } from 'moment-range';
import EventListener from 'react-event-listener';
import keycode from 'keycode';
import CalendarHeader from './CalendarHeader';
import DomainPropTypes from '../constants/prop-types';
import * as defaultUtils from '../utils/utils';
import DayWrapper from './DayWrapper';
import Day from './Day';

var moment = extendMoment(Moment);

/* eslint-disable no-unused-expressions */
export var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonth: _this.props.utils.getStartOfMonth(_this.props.date)
    }, _this.onDateSelect = function (day) {
      var date = _this.props.date;

      var updatedDate = day.clone().hours(date.hours()).minutes(date.minutes());

      _this.props.onChange(updatedDate);
    }, _this.handleChangeMonth = function (newMonth) {
      _this.setState({ currentMonth: newMonth });
    }, _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;

      var startOfDay = function startOfDay(date) {
        return moment(date).startOf('day');
      };

      return minDate && day.isBefore(startOfDay(minDate)) || maxDate && day.isAfter(startOfDay(maxDate));
    }, _this.shouldDisableDate = function (day) {
      var _this$props2 = _this.props,
          disablePast = _this$props2.disablePast,
          disableFuture = _this$props2.disableFuture,
          shouldDisableDate = _this$props2.shouldDisableDate;

      return disableFuture && day.isAfter(moment(), 'day') || disablePast && day.isBefore(moment(), 'day') || _this.validateMinMaxDate(day) || shouldDisableDate(day);
    }, _this.moveToDay = function (day) {
      if (day && !_this.shouldDisableDate(day)) {
        _this.props.onChange(day);
      }
    }, _this.handleKeyDown = function (event) {
      var _this$props3 = _this.props,
          theme = _this$props3.theme,
          date = _this$props3.date;


      switch (keycode(event)) {
        case 'up':
          _this.moveToDay(date.clone().subtract(7, 'days'));
          break;
        case 'down':
          _this.moveToDay(date.clone().add(7, 'days'));
          break;
        case 'left':
          theme.direction === 'ltr' ? _this.moveToDay(date.clone().subtract(1, 'day')) : _this.moveToDay(date.clone().add(1, 'day'));
          break;
        case 'right':
          theme.direction === 'ltr' ? _this.moveToDay(date.clone().add(1, 'day')) : _this.moveToDay(date.clone().subtract(1, 'day'));
          break;
        default:
          // if keycode is not handled, stop execution
          return;
      }

      // if event was handled prevent other side effects (e.g. page scroll)
      event.preventDefault();
    }, _this.renderWeeks = function () {
      var utils = _this.props.utils;
      var currentMonth = _this.state.currentMonth;

      var weeks = utils.getWeekArray(currentMonth);

      return weeks.map(function (week) {
        return React.createElement(
          'div',
          {
            key: 'week-' + week[0].toString(),
            className: _this.props.classes.week
          },
          _this.renderDays(week)
        );
      });
    }, _this.renderDays = function (week) {
      var _this$props4 = _this.props,
          date = _this$props4.date,
          renderDay = _this$props4.renderDay,
          utils = _this$props4.utils;


      var selectedDate = date.clone().startOf('day');
      var currentMonthNumber = utils.getMonthNumber(_this.state.currentMonth);
      var now = moment();

      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);
        var dayInCurrentMonth = utils.getMonthNumber(day) === currentMonthNumber;

        var dayComponent = React.createElement(
          Day,
          {
            current: day.isSame(now, 'day'),
            hidden: !dayInCurrentMonth,
            disabled: disabled,
            selected: selectedDate.isSame(day, 'day')
          },
          utils.getDayText(day)
        );

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
        }

        return React.createElement(
          DayWrapper,
          {
            key: day.toString(),
            value: day,
            dayInCurrentMonth: dayInCurrentMonth,
            disabled: disabled,
            onSelect: _this.onDateSelect
          },
          dayComponent
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentMonth: this.props.utils.getStartOfMonth(nextProps.date)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _props = this.props,
          classes = _props.classes,
          utils = _props.utils;


      return React.createElement(
        Fragment,
        null,
        React.createElement(EventListener, { target: 'window', onKeyDown: this.handleKeyDown }),
        React.createElement(CalendarHeader, {
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon,
          utils: utils
        }),
        React.createElement(
          'div',
          { className: classes.calendar },
          this.renderWeeks()
        )
      );
    }
  }]);

  return Calendar;
}(Component);

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  /** @ignore */
  theme: PropTypes.object.isRequired,
  utils: PropTypes.object,
  shouldDisableDate: PropTypes.func
};
Calendar.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  utils: defaultUtils,
  shouldDisableDate: function shouldDisableDate() {
    return false;
  }
};
var styles = function styles(theme) {
  return {
    calendar: {
      height: 36 * 6,
      marginTop: theme.spacing.unit * 1.5
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

export default withStyles(styles, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(Calendar);