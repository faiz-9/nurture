import styled from "styled-components";

const RightSection = () => {
  return (
    <StyledComponents.Wrapper>
      <div className="right-section-wrapper">
        <div className="right-header-section">
          <div className="buttons">
            <div className="coin-wallets">
              <img src="/assets/images/right-section-images/avalanche.png" />
              <p>Avalanche</p>
              <img src="/assets/images/right-section-images/down-arrow.svg" />
            </div>
            <div className="coin-wallets">
              <img src="/assets/images/middle-section-images/wallet.svg" />
              <p>0XF6...1253</p>
              <img src="/assets/images/right-section-images/down-arrow.svg" />
            </div>
          </div>
        </div>
        {/* HEADER SECTION ENDS HERE  */}

        <div className="right-bottom-section">
          <div className="custom-link">
            <img src="/assets/images/right-section-images/arrow-left.svg" />
            <p>Custom Link</p>
          </div>

          <div className="link-name">
            <p>https://testnet.xyz.xyz/trade?ref=</p>
          </div>

          <div className="input-box">
            <input type="text" placeholder="ENTER" />
          </div>

          <div className="bottom-buttons">
            <div className="btn">
              <img src="/assets/images/middle-section-images/enter.svg" />
              <p>Custom link</p>
            </div>

            <div className="btn">
              <img src="/assets/images/right-section-images/cancel.svg" />
              <p>Cancel</p>
            </div>
          </div>
        </div>
      </div>
    </StyledComponents.Wrapper>
  );
};

export default RightSection;

const StyledComponents = {
  Wrapper: styled.div`
    // width:22%;
    // background:yellow;
    .right-section-wrapper {
      padding: 30px;
      color: #ffffff;
      .right-header-section {
        .buttons {
          display: flex;
          .coin-wallets {
            display: flex;
            align-items: center;
            padding: 5px 8px;

            border-radius: 10px;

            :nth-of-type(1) {
              font-size: 15.0211px;
              line-height: 29px;
              margin-right: 10px;
              background: #353945;
              p {
                margin: 0 4px;
              }
            }

            :nth-of-type(2) {
              border: 1.25176px solid #3772ff;
              p {
                margin: 0 4px;
                font-family: "Inter", sans-serif;
                font-weight: 600;
                font-size: 14px;
                padding: 5px 15px;
                letter-spacing: 0.315952px;
                text-transform: uppercase;
              }
            }
          }
        }
      }

      //HEADER SECTION ENDS HERE

      .right-bottom-section {
        .custom-link {
          margin: 22px 0;
          display: flex;
          p {
            margin-left: 5px;
            font-family: "Inter", sans-serif;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
          }
        }

        .link-name {
          font-size: 16px;
          line-height: 48px;
          letter-spacing: -1px;
          margin-bottom: 10px;
        }

        .input-box {
          margin-bottom: 25px;
          input {
            background: #242731;
            border-radius: 12px;
            outline: none;
            border: 1px solid #242731;
            width: 100%;
            padding: 14px 18px;

            ::placeholder {
              font-family: "Inter", sans-serif;
              font-weight: 600;
              font-size: 12px;
              line-height: 24px;

              color: #808191;
            }
          }
        }

        .bottom-buttons {
          display: flex;
          .btn {
            display: flex;
            align-items: center;
            margin-right: 15px;
            border-radius: 10px;
            padding: 6px 16px;

            p {
              margin-left: 4px;
              font-weight: bold;
              font-size: 14px;
              line-height: 24px;
              font-family: "Inter", sans-serif;
            }

            :nth-of-type(1) {
              background: #3772ff;
            }

            :nth-of-type(2) {
              border: 1px solid #242731;
              border-radius: 12px;
            }
          }
        }
      }
    }
  `,
};
