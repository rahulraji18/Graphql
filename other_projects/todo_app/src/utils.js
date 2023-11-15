export const dynamicHandleChange = (component) => (event) => {
  return component.setState({
    [event.target.name]: event.target.value,
  });
};

export const checkButton = () => () => console.log('Clicked')