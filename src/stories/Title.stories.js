import Title from "../components/Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {},
};
const Template = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: "This is an H1",
};
