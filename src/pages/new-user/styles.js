const { default: styled } = require("styled-components");

const NewWrapper = styled("main")`
  padding-top: 5rem;

  .back-btn {
    background-color: #2196f3;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 2rem;

    :hover {
      color: white;
    }
  }
  .ant-form {
    max-width: 30rem;
    margin-inline: auto;

    label {
      text-transform: capitalize;
    }

    .submit-btn {
      background-color: #009688;
      color: white;
      font-weight: bold;
      text-transform: capitalize;
      :hover {
        color: white;
      }
    }
  }
`;

export default NewWrapper;
