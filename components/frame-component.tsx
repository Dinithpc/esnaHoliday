import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionSectionHeading2Wrapper}>
              <h1 className={styles.sectionSection}>Be inspired</h1>
            </div>
            <div className={styles.sectionSection1}>
              Our insider’s guide to the island. Get a glimpse of what awaits
              you on our island, discover more about local food, history and
              iconic attractions.
            </div>
          </div>
        </div>
        <div className={styles.sectionSectionParent}>
          <div className={styles.sectionSection2}>
            <div className={styles.divblogImage} />
            <img
              className={styles.link9781562551Ac23d8e5cbK}
              loading="lazy"
              alt=""
              src="/link--9781562551-ac23d8e5cb-kjpg@2x.png"
            />
            <div className={styles.travelParent}>
              <div className={styles.travel}>| Travel</div>
              <div className={styles.linkSafari}>Safari in Sri Lanka</div>
              <div className={styles.sriLankaIsContainer}>
                <span>
                  <p className={styles.sriLankaIs}>
                    Sri Lanka is one of the best destinations for
                  </p>
                  <p className={styles.safariInAsia}>
                    safari in Asia. It is one of 10 countries in the...
                  </p>
                </span>
              </div>
            </div>
            <FrameComponent1 />
          </div>
          <div className={styles.parent}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/-2033@2x.png"
            />
            <div className={styles.travelWrapper}>
              <div className={styles.travel1}>| Travel</div>
            </div>
            <div className={styles.linkThingsToDoInColomboWrapper}>
              <div className={styles.linkThings}>Things to do in Colombo</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.colomboIsAGreatPlaceToStParent}>
                  <div className={styles.colomboIsAContainer}>
                    <span>
                      <p className={styles.colomboIsA}>
                        Colombo is a great place to start a Sri Lankan
                      </p>
                      <p className={styles.tourItBecame}>
                        tour. It became an attractive tourist
                      </p>
                      <p className={styles.destinationThatAttracts}>
                        destination that attracts tourists...
                      </p>
                    </span>
                  </div>
                  <div className={styles.divhcodeBlogSeparator} />
                </div>
                <div className={styles.link}>
                  <div className={styles.readMore}>Read More</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionSectionWrapper}>
            <div className={styles.sectionSection3}>
              <div className={styles.divblogImage1} />
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/-2033-1@2x.png"
              />
              <div className={styles.travelContainer}>
                <div className={styles.travel2}>| Travel</div>
              </div>
              <div className={styles.linkSafariInSriLankaWrapper}>
                <div className={styles.linkSafari1}>Safari in Sri Lanka</div>
              </div>
              <div className={styles.sriLankaIsContainer1}>
                <span>
                  <p className={styles.sriLankaIs1}>
                    Sri Lanka is a tropical exotic island in the
                  </p>
                  <p className={styles.indianOceanRich}>
                    Indian Ocean, rich in sandy beaches,
                  </p>
                  <p className={styles.untouchedNatureJungle}>
                    untouched nature, jungle, vibrant culture...
                  </p>
                </span>
              </div>
              <div className={styles.divhcodeBlogSeparatorWrapper}>
                <div className={styles.divhcodeBlogSeparator1} />
              </div>
              <div className={styles.link1}>
                <div className={styles.readMore1}>Read More</div>
              </div>
            </div>
          </div>
          <div className={styles.sectionSection4}>
            <div className={styles.divblogImage2} />
            <div className={styles.group}>
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/-2033-2@2x.png"
              />
              <div className={styles.travel3}>| Travel</div>
            </div>
            <div className={styles.linkSafariInSriLankaParent}>
              <div className={styles.linkSafari2}>Safari in Sri Lanka</div>
              <div className={styles.sriLankaIsAnIslandNationParent}>
                <div className={styles.sriLankaIsContainer2}>
                  <span>
                    <p className={styles.sriLankaIs2}>
                      Sri Lanka is an island nation. That also means
                    </p>
                    <p className={styles.weAreSurrounded}>
                      we are surrounded by the ocean and here in
                    </p>
                    <p className={styles.southAsia}>South Asia,...</p>
                  </span>
                </div>
                <FrameComponent1 propMarginLeft="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
