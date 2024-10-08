import RadioButtonComponent from "./RadioButton";
import RadioButtonAndroid from "./RadioButtonAndroid";
import RadioButtonGroup from "./RadioButtonGroup";
import RadioButtonIOS from "./RadioButtonIOS";
import RadioButtonItem from "./RadioButtonItem";

const RadioButton = Object.assign(
  // @component ./RadioButton.tsx
  RadioButtonComponent,
  {
    // @component ./RadioButtonGroup.tsx
    Group: RadioButtonGroup,
    // @component ./RadioButtonAndroid.tsx
    Android: RadioButtonAndroid,
    // @component ./RadioButtonIOS.tsx
    IOS: RadioButtonIOS,
    // @component ./RadioButtonItem.tsx
    Item: RadioButtonItem,
  },
);

export default RadioButton;
