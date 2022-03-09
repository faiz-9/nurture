import styled from "styled-components";

const Header = () => {
  return (
    <StyledComponents.Wrapper>
      <div>Lorem Ipsum is simply dummy text of the printing</div>
    </StyledComponents.Wrapper>
  );
};

export default Header;

const HeaderUtils = {
  headerColor: "#3772FF",
  fontColor: "#ffffff",
};

const StyledComponents = {
  Wrapper: styled.div`
    background-color: ${HeaderUtils.headerColor};
    height: 36.48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${HeaderUtils.fontColor};
    font-size: 14px;
    line-height: 26px;
    font-weight: 600;
  `,
};
