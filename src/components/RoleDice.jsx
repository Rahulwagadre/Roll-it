import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.main`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    img {
      width: 195px;
      height: 195px;
      &:hover {
        width: 200px;
        height: 200px;
        cursor: pointer;
      }
    }
  }

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
