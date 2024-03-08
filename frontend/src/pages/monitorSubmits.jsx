import { useEffect, useState } from 'react';
import useGetSubmits from '../api/useGetSubmits';
import Item from '../components/Item';
import '../css/monitor.css';

function Monitor() {
    const [data, isLoading, error] = useGetSubmits();
    const [res, setRes] = useState([]);

    useEffect(() => {
        setRes(data);
    }, [data])

    function deleted(id) {
        console.log(id);
        setRes((res) => {
            return res.filter((item) => item.id !== id);
        })
    };

    return (
        <main>
            <Item
                commandId="identifiant de commande"
                siteName="Raison sociale du site"
                managerName="Nom du gerant"
                operatorName="Nom du l'operateur"> </Item>
            {isLoading && <div>loading...</div>}
            {error && <div>error...</div>}
            {!isLoading && res && res.map((item) => {
                return <Item
                    key={item.id}
                    commandId={item.id}
                    siteName={item.siteName}
                    managerName={item.maFullName}
                    operatorName={item.opFullName}
                    deleted={deleted}
                />
            })}
        </main>
    );
}

export default Monitor;
