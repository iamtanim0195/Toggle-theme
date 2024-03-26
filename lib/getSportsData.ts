
type DataProps = {
    id: number,
    title: string,
    events: number,
    sport: string,
    image: string,
}

export default async function getSportsData() {
    const response = await fetch('http://localhost:3000/api/',{cache:'no-store'});
    if (!response) {
        throw new Error("Could not fetch data");
    }
    const data : DataProps[] = await response.json();
    return data;
};
