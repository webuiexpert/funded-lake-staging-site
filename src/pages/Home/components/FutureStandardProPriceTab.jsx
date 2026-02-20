import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TwoStepPriceCard from "./TwoStepPriceCard";
import PriceTableBtns from "../../../Components/PriceTableBtns";
import FiftyPriceCard from "./FiftyPriceCard";
import HundredPriceCard from "./HundredPriceCard";
import OneFiftyPriceCard from "./OneFiftyPriceCard";

function FutureStandardProPriceTab() {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        Standard
                    </Tab>
                    <Tab className="my-2 mx-2 lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                        Pro
                    </Tab>
                </TabList>
                <TabPanel className="standard-tab mt-10">
                    <Tabs>
                        <TabList>
                            <Tab className="50k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>50K <span className="ml-5 inline-block">$119/Month</span></div>
                            </Tab>
                            <Tab className="100k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>100K <span className="ml-5 inline-block">$159/Month</span></div>
                            </Tab>
                            <Tab className="150k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>150K <span className="ml-5 inline-block">$199/Month</span></div>
                            </Tab>
                        </TabList>
                        <TabPanel className="50K-tab">
                            <FiftyPriceCard />
                            {/* <PriceTableBtns dollarAmount="$35" accountAmt="5K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=291" /> */}
                        </TabPanel>
                        <TabPanel className="100K-tab">
                            <HundredPriceCard />
                            {/* <PriceTableBtns dollarAmount="$70" accountAmt="10K" getFundedLink="https://fundedlakedashboard.propaccount.com/en/challenges?planid=292" /> */}
                        </TabPanel>
                        <TabPanel className="150K-tab">
                            <OneFiftyPriceCard />
                            {/* <PriceTableBtns dollarAmount="$175" accountAmt="25K" getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=293" /> */}
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel className="pro-tab">
                     <Tabs>
                        <TabList>
                            <Tab className="50k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>50K <span className="ml-5 inline-block">$119/Month</span></div>
                            </Tab>
                            <Tab className="100k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>100K <span className="ml-5 inline-block">$159/Month</span></div>
                            </Tab>
                            <Tab className="150k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>150K <span className="ml-5 inline-block">$199/Month</span></div>
                            </Tab>
                        </TabList>
                        <TabPanel className="50K-tab">
                            <FiftyPriceCard />
                        </TabPanel>
                        <TabPanel className="100K-tab">
                            <HundredPriceCard />
                        </TabPanel>
                        <TabPanel className="150K-tab">
                            <OneFiftyPriceCard />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default FutureStandardProPriceTab