import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TwoStepPriceCard from "./TwoStepPriceCard";
import PriceTableBtns from "../../../Components/PriceTableBtns";


function StandardProPriceTab() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                       Two Step Standard
                    </Tab>
                    <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                      Two Step Pro
                    </Tab>
                </TabList>
                <TabPanel className="5K standard-price mt-12">
                    <Tabs>
                        <TabList>
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $5K Standard
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
                            <PriceTableBtns dollarAmount="$25" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
                        </TabPanel>
                        <TabPanel className="10K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$50" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
                        </TabPanel>
                        <TabPanel className="25K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$125" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=161" />
                        </TabPanel>
                        <TabPanel className="50K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$225" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=162" />
                        </TabPanel>
                        <TabPanel className="100K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$450" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163" />
                        </TabPanel>
                        <TabPanel className="250K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$1250" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=164" />
                        </TabPanel>
                        <TabPanel className="400K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$2200" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=165" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
                <TabPanel className="10K pro-price mt-12">
                    <Tabs>
                        <TabList>
                            <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                $5K Pro
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
                            <PriceTableBtns dollarAmount="$25" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
                        </TabPanel>
                        <TabPanel className="10K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$50" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" />
                        </TabPanel>
                        <TabPanel className="25K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$125" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=161" />
                        </TabPanel>
                        <TabPanel className="50K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$225" accountAmt="50K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=162" />
                        </TabPanel>
                        <TabPanel className="100K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$450" accountAmt="100K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=163" />
                        </TabPanel>
                        <TabPanel className="250K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$1250" accountAmt="250K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=164" />
                        </TabPanel>
                        <TabPanel className="400K">
                            <TwoStepPriceCard />
                            <PriceTableBtns dollarAmount="$2200" accountAmt="400K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=165" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default StandardProPriceTab