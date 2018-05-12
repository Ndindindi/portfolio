var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/sort-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'material-ui/Icon';
import InputAdornment from 'material-ui/Input/InputAdornment';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import withStyles from 'material-ui/styles/withStyles';

import DomainPropTypes from '../constants/prop-types';
import MaskedInput from './MaskedInput';

var DateTextField = function (_PureComponent) {
  _inherits(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
      var value = props.value,
          format = props.format,
          invalidLabel = props.invalidLabel,
          emptyLabel = props.emptyLabel,
          labelFunc = props.labelFunc;


      var isEmpty = value === null;
      var date = moment(value);

      if (labelFunc) {
        return labelFunc(isEmpty ? null : date, invalidLabel);
      }

      if (isEmpty) {
        return emptyLabel;
      }

      return date.isValid() ? date.format(format) : invalidLabel;
    }, _this.getError = function (value) {
      var _this$props = _this.props,
          maxDate = _this$props.maxDate,
          minDate = _this$props.minDate,
          disablePast = _this$props.disablePast,
          disableFuture = _this$props.disableFuture,
          maxDateMessage = _this$props.maxDateMessage,
          minDateMessage = _this$props.minDateMessage,
          invalidDateMessage = _this$props.invalidDateMessage;


      if (!value.isValid()) {
        // if null - do not show error
        if (value.parsingFlags().nullInput) {
          return '';
        }
        return invalidDateMessage;
      }

      if (maxDate && value.isAfter(maxDate) || disableFuture && value.isAfter(moment().endOf('day'))) {
        return maxDateMessage;
      }

      if (minDate && value.isBefore(minDate) || disablePast && value.isBefore(moment().startOf('day'))) {
        return minDateMessage;
      }

      return '';
    }, _this.updateState = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        value: props.value,
        displayValue: _this.getDisplayDate(props),
        error: _this.getError(moment(props.value))
      };
    }, _this.state = _this.updateState(), _this.handleBlur = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.handleChange = function (e) {
      var _this$props2 = _this.props,
          format = _this$props2.format,
          clearable = _this$props2.clearable,
          onClear = _this$props2.onClear;


      if (clearable && e.target.value === '') {
        if (_this.props.value === null) {
          _this.setState(_this.updateState());
        } else if (onClear) {
          onClear();
        }

        return;
      }

      var oldValue = moment(_this.state.value);
      var newValue = moment(e.target.value, format, true);
      var error = _this.getError(newValue);

      _this.setState({
        displayValue: e.target.value,
        value: error ? newValue : oldValue,
        error: error
      }, function () {
        if (!error && newValue.format('LLLL') !== oldValue.format('LLLL')) {
          _this.props.onChange(newValue, true);
        }
      });
    }, _this.handleFocus = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var keyboard = _this.props.keyboard;


      if (keyboard) {
        return;
      }

      e.target.blur();

      _this.openPicker(e);
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter') {
        _this.openPicker(e);
      }
    }, _this.openPicker = function (e) {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          onClick = _this$props3.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value || nextProps.format !== this.props.format) {
        this.setState(this.updateState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          classes = _props.classes,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          invalidDateMessage = _props.invalidDateMessage,
          clearable = _props.clearable,
          onClear = _props.onClear,
          emptyLabel = _props.emptyLabel,
          labelFunc = _props.labelFunc,
          keyboard = _props.keyboard,
          value = _props.value,
          mask = _props.mask,
          InputProps = _props.InputProps,
          keyboardIcon = _props.keyboardIcon,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          maxDateMessage = _props.maxDateMessage,
          minDateMessage = _props.minDateMessage,
          TextFieldComponent = _props.TextFieldComponent,
          other = _objectWithoutProperties(_props, ['format', 'classes', 'disabled', 'onClick', 'invalidLabel', 'invalidDateMessage', 'clearable', 'onClear', 'emptyLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon', 'maxDate', 'minDate', 'disablePast', 'disableFuture', 'maxDateMessage', 'minDateMessage', 'TextFieldComponent']);

      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;


      var localInputProps = {
        inputComponent: MaskedInput,
        inputProps: {
          mask: value === null ? null : mask,
          readOnly: !keyboard
        },
        className: classes.input
      };

      if (keyboard) {
        localInputProps.endAdornment = React.createElement(
          InputAdornment,
          { position: 'end' },
          React.createElement(
            IconButton,
            { onClick: this.openPicker },
            ' ',
            React.createElement(
              Icon,
              null,
              ' ',
              keyboardIcon,
              ' '
            ),
            ' '
          )
        );
      }

      return React.createElement(TextFieldComponent, _extends({
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    }
  }]);

  return DateTextField;
}(PureComponent);

DateTextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  mask: PropTypes.any,
  minDate: DomainPropTypes.date,
  minDateMessage: PropTypes.string,
  maxDate: DomainPropTypes.date,
  maxDateMessage: PropTypes.string,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  invalidLabel: PropTypes.string,
  emptyLabel: PropTypes.string,
  labelFunc: PropTypes.func,
  keyboard: PropTypes.bool,
  InputProps: PropTypes.shape(),
  keyboardIcon: PropTypes.node,
  invalidDateMessage: PropTypes.string,
  clearable: PropTypes.bool,
  TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  emptyLabel: '',
  value: new Date(),
  labelFunc: undefined,
  format: undefined,
  InputProps: undefined,
  keyboard: false,
  mask: undefined,
  keyboardIcon: 'event',
  invalidDateMessage: 'Invalid Date Format',
  clearable: false,
  onClear: undefined,
  disablePast: false,
  disableFuture: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  TextFieldComponent: TextField
};


var styles = {
  input: {
    alignItems: 'flex-end'
  }
};

export default withStyles(styles)(DateTextField);