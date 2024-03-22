import styled, { keyframes } from "styled-components";

// 워크스페이스 홈
export const WorkSpaceHomeContainer = styled.div`
`;
export const Background = styled.div`
  border-radius: 0 0 20% 20%;
  background: linear-gradient(180deg, #FFD875 0%, #FFA680 100%);
  width: 375px;
  height: 275px;
  background-size: contain;
  position: absolute;
  z-index: -1;
  flex-shrink: 0;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const PersonGrid = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;
export const Person = styled.div`
  position: relative;
  width: 50%;
  text-align: center;
  margin: 15px 0 15px 0;
`;
export const PersonImg = styled.div` 
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 1px solid #D9D9D9;
  margin-bottom: 10px;
`;
export const Modal = styled.div`
  position: absolute;
  width: 138.575px;
  height: 29.447px;
  border-radius: 8.661px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.20);
  background: linear-gradient(93deg, #FFD875 0%, #FFA680 96.72%);
  flex-shrink: 0;
  color: #FFF;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 8px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 하단바
export const BottomContainer = styled.div`
  width: 375px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  height: 55px;
  text-align: center;
  border-top: 1px solid #D7D7D7;
  background-color: white;
`;
export const BottomContent = styled.button`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size: 13px;
  color: ${props => props.active ? '#FEC533' : '#d7d7d7'};
`;

export const wsListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  gap: 30px;
`

export const wsListBox = styled.button`
  color: white;
  width: 100%;
  height: 130px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;`


  export const plusBtn = styled.button`
  border-radius: 7.759px;
  background: #EFEFEF;
`

const gradientShift = keyframes`
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`

export const GradientButton = styled.button`
  border: none;
  border-radius: 24px;
  background-size: 200% 200%;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  color: white;
  font-size: 15.5px;
  cursor: pointer;
  animation: ${gradientShift} 3s ease infinite;

  &:hover {
    opacity: 0.9;
  }
`