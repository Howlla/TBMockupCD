import { LOAD_INITAL, VIEW_PATIENT } from "../actionTypes/actionTypes";

const initialState = {
  activePatients: "",
  lastWeekData: [],
  patientList: [],
  patientData: {},
  dataLoaded: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INITAL:
      return {
        ...state,
        lastWeekData: action.payload.lastWeekData,
        patientList: action.payload.patientList,
        activePatients: action.payload.patientList.length,
        dataLoaded: true
      };
    case VIEW_PATIENT:
      return {
        ...state,
        patientData: action.payload.patientData
      };
    default:
      return state;
  }
};

export default AppReducer;
