import React from "react";
import styled from "styled-components";

import PositionIcon from "../../assets/img/positionIcon.svg";
import { Title } from "../../designSystem";

const PositionsContainer = styled.div`
  font-family: VCR;
  color: white;
  background: #1c1a19;
  border: 1px solid #2b2b2b;
  box-sizing: border-box;
  border-radius: 8px;
`;

const ProfitText = styled.span`
  color: #16ceb9;
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
`;

const AmountText = styled.span`
  font-size: 12px;
  line-height: 16px;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 0.64);
`;

const YourPosition = () => {
  return (
    <PositionsContainer className="d-flex flex-row justify-content-center mt-4 p-4">
      <img style={{ width: 45 }} src={PositionIcon} alt="Positions" />

      <div className="w-100">
        <div className="w-100 d-flex flex-row align-items-center justify-content-between ml-2">
          <Title>Your Position</Title>
          <Title>32 ETH</Title>
        </div>
        <div className="w-100 d-flex flex-row align-items-center justify-content-between ml-2 mt-1">
          <ProfitText>+12.23%</ProfitText>
          <AmountText>$56,262.32</AmountText>
        </div>
      </div>
    </PositionsContainer>
  );
};

export default YourPosition;