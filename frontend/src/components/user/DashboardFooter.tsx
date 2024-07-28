import { useEffect, useState } from "react";


const DashboardFooter = () => {
    const [year, setYear] = useState<string | number>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return (
        <div className="w-full py-6 bg-color5 font-barlow font-light text-center text-sm text-gray-300">
            &copy;{year} StreamFlow. All Rights Reserved
        </div>
    )
}

export default DashboardFooter