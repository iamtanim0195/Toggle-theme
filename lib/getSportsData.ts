
interface SportsItem {
    id: number;
    title: string;
    events: number;
    sport: string;
    image: string;
}

interface SpotlightItem {
    id: number;
    title: string;
    date: string;
    day: string;
    time?: string;
    add: string;
    btn: string;
    image: string;
}

type ResponseData = {
    sports: SportsItem[];
    spotlight: SpotlightItem[];
}
export default async function getSportsData() {
    const response:Response = await fetch('https://toggle-theme-bay.vercel.app/api/',{cache:'no-store'});
    if (!response) {
        throw new Error("Could not fetch data");
    }
    const data : ResponseData = await response.json();
    return data;
};
