export const Input = (props) => {
    const { handleChange, inputValue } = props;
    return <input type="text" onChange={handleChange} value={inputValue}/>;
} 