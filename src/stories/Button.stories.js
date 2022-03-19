import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};
const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   backgroundColor: "tomato",
//   label: "press me",
//   size: "md",
// };
export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "press me",
  size: "lg",
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "press me",
  size: "sm",
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "green",
  label: "Long CTA",
  size: "md",
};
