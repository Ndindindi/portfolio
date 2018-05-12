import {TOGGLE_COLLAPSED_NAV} from '../constants/ActionTypes';

export function toggleCollapsedNav(isNavCollapsed) {
    return {type: TOGGLE_COLLAPSED_NAV, isNavCollapsed};
}
