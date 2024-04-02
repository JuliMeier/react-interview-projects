import Tabs from "./tabs";

function RandonComponent(){
    <div>Some randon content</div>
}

export default function TabsTest(){

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandonComponent />
        }
    ]

    return (
        <Tabs tabsContent={} />
    )
}