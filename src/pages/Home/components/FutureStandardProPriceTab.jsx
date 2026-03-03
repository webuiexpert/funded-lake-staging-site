import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PriceTableBtns from "../../../Components/PriceTableBtns";
import FiftyPriceCard from "./FiftyPriceCard";
import HundredPriceCard from "./HundredPriceCard";
import OneFiftyPriceCard from "./OneFiftyPriceCard";

function FutureStandardProPriceTab() {
    return (
        <div className="relative z-50">
            <Tabs>
                <TabList>
                    <Tab className="my-2 mx-2 uppercase lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 text-white hover:text-white rounded-full">
                        Standard
                    </Tab>
                    <Tab className="my-2 mx-2 uppercase lg:px-6 md:px-2 md:py-3 px-4 hover:bg-[#032070] duration-200 text-white hover:text-white rounded-full">
                        Plus
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
                            <FiftyPriceCard evaluationActivateFee={'None'} fundedActivateFee={'$120'} />
                            <PriceTableBtns
                                hideHeading={true}
                                getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=298"
                            />
                        </TabPanel>
                        <TabPanel className="100K-tab">
                            <HundredPriceCard evaluationActivateFee={'None'} fundedActivateFee={'$120'}/>
                            <PriceTableBtns
                            hideHeading={true}
                            getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=299" />
                        </TabPanel>
                        <TabPanel className="150K-tab">
                            <OneFiftyPriceCard evaluationActivateFee={'None'}  fundedActivateFee={'$120'}/>
                            <PriceTableBtns
                            hideHeading={true}
                            getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=300" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel className="plus-tab">
                    <Tabs>
                        <TabList>
                            <Tab className="50k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>50K <span className="ml-5 inline-block">$129/Month</span></div>
                            </Tab>
                            <Tab className="100k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>100K <span className="ml-5 inline-block">$179/Month</span></div>
                            </Tab>
                            <Tab className="150k my-2 mx-2 lg:px-6 md:px-2 md:py-5 px-4 hover:bg-[#032070] duration-200 hover:text-white rounded-full">
                                <div>150K <span className="ml-5 inline-block">$219/Month</span></div>
                            </Tab>
                        </TabList>
                        <TabPanel className="50K-tab">
                            <FiftyPriceCard evaluationActivateFee={'None'} fundedActivateFee={'None'} />
                            <PriceTableBtns hideHeading={true} getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=304" />
                        </TabPanel>
                        <TabPanel className="100K-tab">
                            <HundredPriceCard evaluationActivateFee={'None'} fundedActivateFee={'None'} />
                            <PriceTableBtns hideHeading={true} getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=305" />
                        </TabPanel>
                        <TabPanel className="150K-tab">
                            <OneFiftyPriceCard evaluationActivateFee={'None'} fundedActivateFee={'None'} />
                            <PriceTableBtns hideHeading={true} getFundedLink="https://fundedlakedashboard.propaccount.com/challenges?planid=306" />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default FutureStandardProPriceTab