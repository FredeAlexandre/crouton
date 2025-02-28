import { MenuCard, MenuCardContentContent, MenuCardContentEmpty, MenuCardDay, MenuCardHeader } from "./components/menu-card";

function Menus() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Menus</h1>
            <div className="flex flex-col gap-4">
                <MenuCard>
                    <MenuCardHeader>
                        <MenuCardDay date={new Date()} />
                    </MenuCardHeader>
                    <MenuCardContentEmpty />
                </MenuCard>
                <MenuCard>
                    <MenuCardHeader>
                        <MenuCardDay date={new Date()} />
                    </MenuCardHeader>
                    <MenuCardContentContent />
                </MenuCard>
            </div>
        </div>
    );
}
  
export default Menus;
