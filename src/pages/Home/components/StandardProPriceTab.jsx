import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TwoStepPriceCard from "./TwoStepPriceCard";
import PriceTableBtns from "../../../Components/PriceTableBtns";
import TwoStepsProCrad from "./TwoStepsProCrad";


function StandardProPriceTab() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab className="my-2 mx-2 lg:px-6 uppercase md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                      Standard
                    </Tab>
                    <Tab className="my-2 mx-2 lg:px-6 uppercase md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                      Pro
                    </Tab>
                </TabList>
                <TabPanel className="5K standard-price mt-12">
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
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $250K
                            </Tab>
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $400K
                            </Tab>
                        </TabList>
                        <TabPanel className="5K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="20%" couponCode="FL20"  newAmount="$28" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=291" />
                        </TabPanel>
                        <TabPanel className="10K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="20%" couponCode="FL20" newAmount="$56" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=292" />
                        </TabPanel>
                        <TabPanel className="25K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$175" newAmount="122.5$" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=293" />
                        </TabPanel>
                        <TabPanel className="50K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$350" newAmount="245$" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=294" />
                        </TabPanel>
                        <TabPanel className="100K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$700" newAmount="490$" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=295" />
                        </TabPanel>
                        <TabPanel className="250K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$1750" newAmount="1225$" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=296" />
                        </TabPanel>
                        <TabPanel className="400K">
                            <TwoStepPriceCard />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$2800" newAmount="1960$" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=297" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel className="10K pro-price mt-12">
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
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $250K
                            </Tab>
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $400K
                            </Tab>
                        </TabList>
                        <TabPanel className="5K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="20%" couponCode="FL20" newAmount="$20" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=291" />
                        </TabPanel>
                        <TabPanel className="10K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="20%" couponCode="FL20" newAmount="$40" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=292" />
                        </TabPanel>
                        <TabPanel className="25K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$125" newAmount="87.5$" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=293" />
                        </TabPanel>
                        <TabPanel className="50K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$225" newAmount="157.5$" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=294" />
                        </TabPanel>
                        <TabPanel className="100K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$450" newAmount="315$" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=295" />
                        </TabPanel>
                        <TabPanel className="250K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$1250" newAmount="875$" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=296" />
                        </TabPanel>
                        <TabPanel className="400K">
                            <TwoStepsProCrad />
                            <PriceTableBtns goalDiscount="30%" couponCode="BIG30" oldAmount="$2200" newAmount="1540$" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=297" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default StandardProPriceTab