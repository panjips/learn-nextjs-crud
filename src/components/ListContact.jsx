import { getData } from '@/data/fetchData';
import { ItemContact } from './ItemContact';
import React from 'react';

export const ListContact = async () => {
    const { data } = await getData();

    return (
        <div className="max-w-xs md:max-w-2xl lg:max-w-3xl m-auto">
            <div className="grid grid-cols-2 gap-4">
                {data.map((item) => {
                    return <ItemContact key={item._id} data={item} />;
                })}
            </div>
        </div>
    );
};
