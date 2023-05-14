const MenuBar = () => {
    return (
        <div className="border border-slate-500 rounded-md flex flex-row md:w-[60%] lg:w-[30%] xl:w-[30%] justify-around p-2 items-center">
            <div className="cursor-pointer hover:underline text-slate-500">General</div>
            <div className="cursor-pointer hover:underline text-slate-500">Users</div>
            <div className="cursor-pointer hover:underline text-slate-500">Plan</div>
            <div className="cursor-pointer hover:underline text-slate-500">Billing</div>
            <div className="cursor-pointer hover:underline text-slate-500">Integration</div>
        </div>
    )
}
export default MenuBar