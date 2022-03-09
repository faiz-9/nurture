import styled from "styled-components";
import Image from "next/image";

const Sidebar = () => {
  return (
    <StyledComponents.Wrapper>
      <div className="sidebar-container">
        <div className="sidebar-header-section">
          <div className="sidebar-header-name">
            <Image
              src={"/assets/images/sidebar-images/name.svg"}
              width={27}
              height={27}
              layout="fixed"
            />
            <p>Name</p>
          </div>

          <div className="sidebar-header-arrow">
            <Image
              src={"/assets/images/sidebar-images/back-icon.svg"}
              width={30}
              height={30}
              layout="fixed"
            />
          </div>
        </div>

        <div className="sidebar-menu-items">
          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/home.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Home</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-1.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 1</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-2.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 2</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-3.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 3</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-4.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 4</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-5.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 5</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-6.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 6</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-7.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 7</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/section-7.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Section 8</p>
            </div>
          </div>

          <div className="sidebar-menu-lists">
            <div className="sidebar-menu-sections">
              <img src="/assets/images/sidebar-images/documentation.svg" />
            </div>

            <div className="sidebar-menu-sections">
              <p>Documentation</p>
            </div>
          </div>
        </div>
        {/* MENU ITEMS ENDS HERE  */}

        <div className="sidebar-bottom-items">
          <div className="sidebar-bottom-buttons">
            <div className="button">
              <button>
                <img
                  src="/assets/images/sidebar-images/name.svg"
                  width="16px"
                />
                <div>
                  <p>$0.90</p>
                </div>
              </button>
            </div>

            <div className="button">
              <button>
                {" "}
                <p>Buy $XYZ</p>
              </button>
            </div>
          </div>
          {/* BUTTONS ENDS HERE  */}

          <div className="sidebar-bottom-toggler">
            <div className="sidebar-bottom-toggler-items first">
              <img src="/assets/images/sidebar-images/world-map.svg" />
            </div>

            <div className="sidebar-bottom-toggler-items">
              <img src="/assets/images/sidebar-images/dark-toggle.svg" />
            </div>
          </div>
        </div>
      </div>
    </StyledComponents.Wrapper>
  );
};

export default Sidebar;

const SidebarUtils = {
  fontColor: "#ffffff",
  dividerColor: "#242731",
  lightGreyColor: "#353945",
};

const StyledComponents: any = {
  Wrapper: styled.div`
    color: ${SidebarUtils.fontColor};
    // border-right: 2px solid  ${SidebarUtils.dividerColor};
    // width:250px;
    width: 18%;

    height: 100%;

    .sidebar-container {
      padding: 30px;

      .sidebar-header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;

        .sidebar-header-name {
          display: flex;
          align-items: center;

          p {
            margin-left: 6px;
            font-weight: 600;
            font-size: 23.5618px;
            line-height: 31px;
            letter-spacing: -0.02em;
          }
        }
      }

      // NEXT SECTION STARTS HERE

      .sidebar-menu-items {
        height: 460px;
        // background:grey;
        margin-bottom: 80px;
        .sidebar-menu-lists {
          display: flex;
          margin-bottom: 25px;
          font-family: "Inter", sans-serif;

          :hover {
            transition: 0.2s ease-out;
            cursor: pointer;
            background: ${SidebarUtils.lightGreyColor};
            border-radius: 12px;
            padding: 6px 11px;

            .sidebar-menu-sections p {
              color: ${SidebarUtils.fontColor};
            }
          }
          .sidebar-menu-sections {
            p {
              font-style: normal;
              font-weight: 600;
              font-size: 14px;
              margin-left: 15px;
              color: #808191;
            }
          }
        }
      }

      // NEXT SECTION STARTS HERE

      .sidebar-bottom-items {
        .sidebar-bottom-buttons {
          display: flex;
          margin-bottom: 17px;
          .button {
            :nth-of-type(1) {
              margin-right: 6px;
            }

            button {
              cursor: pointer;
              font-family: "Inter", sans-serif;
              display: flex;
              align-items: center;
              background: ${SidebarUtils.lightGreyColor};
              border-radius: 10px;
              border: 1px solid ${SidebarUtils.lightGreyColor};
              outline: none;
              color: ${SidebarUtils.fontColor};
              padding: 3px 12px;

              font-weight: 600;
              font-size: 14px;
              line-height: 29px;

              img {
                margin-right: 5px;
              }
            }

            :nth-of-type(2) {
              button {
                background: #a3e3ff;
                color: #3772ff;
                border: 1px solid #a3e3ff;
              }
            }
          }
        }

        //TOGGLER STARTS..

        .sidebar-bottom-toggler {
          display: flex;

          .first {
            margin-top: 3.77px;
          }

          .sidebar-bottom-toggler-items {
            :nth-of-type(1) {
              margin-right: 10px;
            }
          }
        }
      }
    }
  `,
};
