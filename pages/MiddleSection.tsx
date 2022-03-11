import styled from "styled-components";

const MiddleSection = ({ data }: any) => {
  return (
    <StyledComponents.Wrapper>
      <div className="middle-section-container">
        <div className="middle-section-header">
          <div className="middle-section-heading">
            <p>Section</p>
          </div>

          <div className="middle-section-wallet">
            <div className="wallet-items">
              <img src="/assets/images/middle-section-images/wallet.svg" />
              <p>0.2 $XYZ</p>
              <div className="tier1">
                <p>Tier 1</p>
              </div>
            </div>
          </div>
        </div>
        {/* HEADER - FIRST SECTION ENDS HERE */}

        <div className="middle-second-section">
          <div className="cross-icon">
            <img src="/assets/images/middle-section-images/cross.svg" />
          </div>
          <div className="blue-bg">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="btn-and-image">
              <button>Tutorial</button>
              <div className="bitcoin-image">
                <img src="/assets/images/middle-section-images/bitcoin.png" />
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION ENDS HERE  */}

        <div className="middle-third-section">
          <div className="middle-third-container">
            <div className="third-container-contents">
              <div className="left-side">
                <p>Your rewards</p>
                <p>$ 0.26231428</p>
                <div className="three-buttons">
                  <button>$40 AVAX</button>
                  <button>$10 BNB</button>
                  <button>$210 BTC</button>
                </div>
              </div>
              <div className="right-side">
                <button>
                  <img src="/assets/images/middle-section-images/enter.svg" />
                  <p>Custom link</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD SECTION ENDS HERE  */}

        <div className="middle-fourth-section">
          <div className="middle-fourth-cards">
            <div className="cards">
              <div className="card-contents">
                <div className="card-top">
                  <img src="/assets/images/middle-section-images/Oval.svg" />
                  <p>12.5% of fee</p>
                </div>
                <p className="referal-link">Your Referral Link for xyz</p>
                <div className="card-bottom">
                  <p>https://unityexchange.design</p>
                  <img src="/assets/images/middle-section-images/copy.svg" />
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="card-contents">
                <div className="card-top">
                  <img src="/assets/images/middle-section-images/Oval.svg" />
                  <p>12.5% of fee</p>
                </div>
                <p className="referal-link">Your Referral Link for xyz</p>
                <div className="card-bottom">
                  <p>https://unityexchange.design</p>
                  <img src="/assets/images/middle-section-images/copy.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION ENDS HERE  */}

        <div className="middle-last-section">
          <div className="last-header-section">
            <p>First Tab</p>
            <p>Second Tab</p>
          </div>

          <div className="last-table">
            <table>
              <thead>
                <th>ASSET</th>
                <th>AMOUNT</th>
                <th>USER ACCOUNT</th>
                <th>REFERRAL EARNING</th>
              </thead>

              {data?.map((data: any) => (
                <>
                  <div>
                    <tr>
                      <td>
                        <div className="first-parent">
                          <div className="">
                            <img src={data.img} />
                          </div>

                          <div className="first">
                            <p>{data.asset}</p>
                            <div>
                              <p>{data.type}</p>
                              <p>
                                <img src={data.chain.img} /> {data.chain.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="second-parent">
                          <p> {data.amount} BNB</p>
                          <p> {data.state}</p>
                        </div>
                      </td>

                      <td>
                        <div className="third-parent">
                          {data.user.length < 9
                            ? `${data.user}`
                            : `${data.user.substring(0, 14)}...`}
                        </div>
                      </td>

                      <td>
                        <div className="fourth-parent">
                          <p>{data.referral_earnings} BNB</p>
                          <p>
                            View on BSC Scan{" "}
                            <span>
                              <img src="/assets/images/middle-section-images/exit.svg" />
                            </span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </div>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </StyledComponents.Wrapper>
  );
};

export default MiddleSection;

const MiddleSectionUtils = {
  fontColor: "#ffffff",
  dividerColor: "#242731",
  lightGreyColor: "#353945",
};

const StyledComponents = {
  Wrapper: styled.div`
    color: ${MiddleSectionUtils.fontColor};
    padding: 30px 40px;
    border-right: 2px solid ${MiddleSectionUtils.dividerColor};
    border-left: 2px solid ${MiddleSectionUtils.dividerColor};
    // background:red;
    // width:70%;
    width: 58%;

    .middle-section-container {
      .middle-section-header {
        display: flex;
        justify-content: space-between;

        .middle-section-heading {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding-bottom: 2px;
          border-bottom: 2px solid #3772ff;
          border-bottom-radius: 10px;
        }

        .middle-section-wallet {
          background: #191b20;
          padding: 5px 9px;
          border-radius: 12.2549px;

          .wallet-items {
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 16px;
            text-transform: uppercase;

            img {
              margin-right: 7px;
            }

            .tier1 {
              margin-left: 10px;

              font-weight: 600;
              font-size: 12px;
              text-align: center;
              letter-spacing: 0.240494px;
              color: #3772ff;

              p {
                text-transform: Capitalize;
                background: #a3e3ff;
                border-radius: 5px;
                padding: 0 4px;
              }
            }
          }
        }
      }

      // HEADER STYLING ENDS HERE

      .middle-second-section {
        margin-top: 30px;
        color: #2b2557;
        position: relative;

        .cross-icon {
          position: absolute;
          right: -9px;
          top: -9px;
        }

        .blue-bg {
          background: #abe8ff;
          border-radius: 10px;
          // width:687px;
          padding: 24px;

          .btn-and-image {
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            .bitcoin-image {
              position: absolute;
              right: 0;
            }
          }

          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 26px;
          }

          button {
            font-family: "Inter", sans-serif;
            cursor: pointer;
            font-weight: 600;
            font-size: 12px;
            background: #ffffff;
            border-radius: 6px;
            padding: 3px 8px;
            color: #2b2557;
            border: 1px solid #ffffff;
            outline: none;
          }
        }
      }

      // SECOND STYLING ENDS HERE

      .middle-third-section {
        margin-top: 30px;
        // width:700px;
        background: #242731;
        padding: 24px;
        border-radius: 24px;

        .third-container-contents {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left-side {
            p {
              :nth-of-type(1) {
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
              }

              :nth-of-type(2) {
                font-weight: 600;
                font-size: 28px;
                line-height: 48px;
                letter-spacing: -1px;
              }
            }

            .three-buttons {
              margin-top: 10px;
              button {
                cursor: pointer;
                background: #353945;
                border-radius: 11px;
                border: 1px solid #353945;
                padding: 5px 12px;
                margin-right: 8px;

                font-weight: 600;
                font-size: 12px;
                line-height: 17px;
                color: #ffffff;
              }
            }
          }

          .right-side {
            button {
              cursor: pointer;
              display: flex;
              align-items: center;
              padding: 5px 12px;
              background: #3772ff;
              border-radius: 10px;
              border: 1px solid #3772ff;
              outline: none;
            }

            p {
              color: #ffffff;
              font-family: "Inter", sans-serif;
              font-weight: bold;
              font-size: 14px;
              line-height: 24px;
              margin-left: 5px;
            }
          }
        }
      }

      // MIDDLE THIRD SECTION ENDS HERE

      .middle-fourth-section {
        margin-top: 30px;

        .middle-fourth-cards {
          display: flex;
          justify-content: space-between;

          .cards {
            // width:340px;
            flex: 1;
            padding: 24px;
            background: #191b20;
            opacity: 0.8;
            border-radius: 16px;

            :nth-of-type(1) {
              margin-right: 25px;
            }

            .card-contents {
              .referal-link {
                font-weight: 500;
                font-size: 16px;
                font-family: "Inter", sans-serif;
                color: #808191;
              }
              .card-top {
                display: flex;
                margin-bottom: 10px;

                p {
                  font-weight: bold;
                  font-size: 20px;

                  margin-left: 6px;
                }
              }

              .card-bottom {
                margin-top: 10px;
                background: #242731;
                padding: 14px 5px 14px 20px;
                border-radius: 8px;
                display: flex;

                p {
                  font-family: "Inter", sans-serif;
                  font-weight: bold;
                  font-size: 14px;
                  line-height: 24px;
                  margin-right: 30px;
                }
              }
            }
          }
        }
      }

      //FOURTH SECTION ENDS HERE

      .middle-last-section {
        margin-top: 30px;
        .last-header-section {
          display: flex;
          p {
            font-family: "Inter", sans-serif;
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;

            :nth-of-type(1) {
              padding-bottom: 4px;
              border-bottom: 2px solid #3772ff;
              border-bottom-radius: 10px;
              margin-right: 14px;
            }

            :nth-of-type(2) {
              color: #808191;
            }
          }
        }

        .last-table {
          margin-top: 20px;

          table {
            width: 100%;
          }
          thead {
            background: green;
            display: flex;

            // justify-content:space-around;
            background: #191b20;
            padding: 6px 0px;
            border-radius: 8px;

            font-family: "Inter", sans-serif;
            font-weight: 600;
            font-size: 10px;
            line-height: 24px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #808191;
            margin-bottom: 10px;

            th {
              width: 25%;
            }
          }

          tr {
            display: flex;
            // justify-content:space-around;
            // margin-bottom:15px;
            padding: 10px 0;
            background: rgba(36, 39, 49, 0.4);
            border-radius: 5px;
          }

          td {
            width: 25%;
            display: flex;
            justify-content: center;

            .first-parent {
              display: flex;
              .first {
                margin-left: 8px;
                > p {
                  font-weight: 600;
                  font-size: 14px;
                }

                div {
                  display: flex;
                  p {
                    :nth-of-type(1) {
                      font-family: "Inter", sans-serif;
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 16px;
                      color: #808191;
                    }

                    :nth-of-type(2) {
                      background: #353945;
                      border-radius: 7.15472px;

                      font-weight: 600;
                      font-size: 7.80515px;
                      display: flex;
                      align-items: center;
                      line-height: 11px;
                      padding: 0 4px;
                      color: #ffffff;
                      margin-left: 4px;
                    }
                  }
                }
              }
            }

            // FIRST PARENT ENDS HERE

            .second-parent {
              display: flex;
              flex-direction: column;

              p {
                :nth-of-type(1) {
                  font-family: "Inter", sans-serif;
                  font-weight: 600;
                  font-size: 14px;
                }

                :nth-of-type(2) {
                  font-family: "Inter", sans-serif;
                  text-align: center;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 24px;
                  color: #808191;
                  text-transform: capitalize;
                }
              }
            }

            // SECOND PARENT ENDS HERE

            .third-parent {
              font-family: "Inter", sans-serif;
              font-weight: 600;
              font-size: 14px;
              line-height: 24px;
            }

            // THIRD PARENT ENDS HERE

            .fourth-parent {
              p {
                :nth-of-type(1) {
                  font-family: "Inter", sans-serif;
                  text-align: center;
                  font-weight: 600;
                  font-size: 14px;
                  line-height: 24px;
                }

                :nth-of-type(2) {
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 16px;
                  color: #808191;
                }
              }
            }
          }
        }
      }
    }
  `,
};
