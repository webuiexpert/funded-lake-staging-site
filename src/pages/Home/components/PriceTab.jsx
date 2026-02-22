import dollarCubeIcon from "/assets/bicon-icons-bg-left.png";
import coineCubeIcon from "/assets/bicon-icons-bg-right.png";
import PriceTable from "./PriceTable";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OneStepPriceCard from "./OneStepPriceCard";
import InstantPriceCard from "./InstantPriceCard";
import PrimaryButton from "../../../Components/PrimaryButton";
import PriceTableBtns from "../../../Components/PriceTableBtns";
import StandardProPriceTab from "./StandardProPriceTab";
import FutureStandardProPriceTab from "./FutureStandardProPriceTab";

function PriceTab() {
  return (
    <div className="relative">
      <div className="w-full relative z-10 max-w-6xl mx-auto px-4 pt-10 md:pt-0 lg:px-0 lg:py-6 ">
        <div class="navy-left-side-gradient d-block"></div>
        <div class="navy-right-side-gradient md:d-block hidden"></div>
        <img
          className="scale-plus-animation absolute left-10 w-56 rotate-28 md:block hidden"
          src={dollarCubeIcon}
          alt=""
        />
        <img
          className="scale-plus-animation md:block hidden absolute right-20 bottom-72 w-56 -rotate-52"
          src={coineCubeIcon}
          alt=""
        />
        <div class="navy-side-gradient d-block"></div>
        <div className="flex flex-wrap w-full lg:mb-24 md:mb-12 mb-7 flex-col items-center text-center">
          <motion.h2
            className="md:leading-[1.1em] font-bold title-font mb-2 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }} //
          >
            <span className="text-white">READY TO GET</span> FUNDED? <br />
            <span className="text-white">THEN LET'S GET</span> STARTED!
          </motion.h2>
          <p className="text-white md:text-xl text-base mt-6 md:max-w-4xl w-full">
            Our evaluation is based on best practices and International
            Standards, customized and refined to cater to every trading style.
          </p>
        </div>
        <div>
          <Tabs>
            <TabList className="priceTabU-01 overflow-hidden bg-[#000b1f] w-full">
              <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark font-bold rounded-full">
                FOREX/CFD
              </Tab>
              <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark font-bold  rounded-full">
                FUTURES
              </Tab>
            </TabList>
            <TabPanel className="mt-10 lg:text-lg overflow-x-auto">
              <Tabs className="priceTab md:text-[14px] lg:max-w-5xl max-w-full mx-auto md:mb-0 mb-6 font-bold text-sm text-white relative z-20">
                <TabList className="priceTabUl overflow-hidden bg-[#000b1f] w-full">
                  <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
                    ONE STEP
                  </Tab>
                  <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
                    TWO STEP
                  </Tab>
                  <Tab className="cursor-pointer md:px-6 md:py-3 py-2 px-4 bg-dark mx-0 hover:bg-[#032070] duration-200 hover:text-dark rounded-full">
                    INSTANT
                  </Tab>
                </TabList>

                <TabPanel className="one-step InnerPriceTab mt-10 lg:text-lg">
                  <Tabs>
                    <TabList>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $5K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $10K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $25K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $50K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
                        $100K
                        <br />
                        <span className="lg:text-[10px] text-[5px] text-[#fff608]">
                          MOST POPULAR
                        </span>
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $250K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $400K
                      </Tab>
                    </TabList>
                    <TabPanel className="5K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$35" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
                    </TabPanel>
                    <TabPanel className="10K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$75" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" />
                    </TabPanel>
                    <TabPanel className="25K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$190" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" />
                    </TabPanel>
                    <TabPanel className="50K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$375" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" />
                    </TabPanel>
                    <TabPanel className="100K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$750" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" />
                    </TabPanel>
                    <TabPanel className="250K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$2000" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" />
                    </TabPanel>
                    <TabPanel className="400K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$3,600" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" />

                    </TabPanel>
                  </Tabs>
                </TabPanel>
                <TabPanel className="two-step InnerPriceTab mt-10 lg:text-lg overflow-x-auto">
                  <StandardProPriceTab />
                </TabPanel>
                <TabPanel className="instant  InnerPriceTab lg:text-lg mx-auto">
                  <Tabs>
                    <TabList>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $5K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $10K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $25K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        $50K
                      </Tab>
                      <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full leading-4">
                        $100K
                        <br />
                        <span class="lg:text-[10px] text-[5px] text-[#fff608]">
                          MOST POPULAR
                        </span>
                      </Tab>
                    </TabList>
                    <TabPanel className="5K">
                      <InstantPriceCard />
                      <PriceTableBtns dollarAmount="$200" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=180" />
                    </TabPanel>
                    <TabPanel className="10K">
                      <InstantPriceCard />
                      <PriceTableBtns dollarAmount="$400" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=181" />
                    </TabPanel>
                    <TabPanel className="25K">
                      <InstantPriceCard />
                      <PriceTableBtns dollarAmount="$1,125" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=182" />
                    </TabPanel>
                    <TabPanel className="50K">
                      <InstantPriceCard />
                      <PriceTableBtns dollarAmount="$2,500" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=183" />
                    </TabPanel>
                    <TabPanel className="100K">
                      <InstantPriceCard />
                      <PriceTableBtns dollarAmount="$5,000" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=184" />
                    </TabPanel>
                    <TabPanel className="250K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$2000" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" />
                    </TabPanel>
                    <TabPanel className="400K">
                      <OneStepPriceCard />
                      <PriceTableBtns dollarAmount="$3,600" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" />
                    </TabPanel>
                  </Tabs>
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel className="two-step InnerPriceTab lg:text-lg overflow-x-auto">
             <FutureStandardProPriceTab />
            </TabPanel>
          </Tabs>
        </div>
        {/* <PriceTable /> */}
      </div>
    </div>
  );
}

export default PriceTab;
