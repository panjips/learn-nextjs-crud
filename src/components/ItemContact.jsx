'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteData, editData } from '@/data/fetchData';

export const ItemContact = ({ data }) => {
    const router = useRouter();

    const [name, setName] = useState(data.name);
    const [number, setNumber] = useState(data.phone_number);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleDeleteContact = async () => {
        setLoading(true);
        const result = await deleteData(data._id);
        router.refresh();
        setLoading(false);
    };

    const handleEditContact = async () => {
        setLoading(true);
        const result = await editData({
            _id: data._id,
            name,
            phone_number: number
        });
        router.refresh();
        setLoading(false);
        setEdit(false);
        setName(data.name);
        setNumber(data.phone_number);
    };

    return (
        <div className="bg-white rounded-lg border-2 border-green-500 p-4">
            {edit ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        className="py-2 px-4 border w-full rounded-lg focus:outline-indigo-400"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="Number"
                        className="py-2 px-4 my-4 border w-full rounded-lg focus:outline-indigo-400"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => setEdit(false)}
                            className="hover:bg-rose-700 bg-rose-600 p-2 text-white rounded-md text-xs"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleEditContact}
                            className="hover:bg-indigo-600 bg-indigo-500 p-2 text-white rounded-md text-xs"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.phone_number}</p>
                    <div className="flex justify-end gap-2">
                        <button
                            disabled={loading}
                            onClick={handleDeleteContact}
                            className="hover:bg-rose-700 bg-rose-600 p-2 text-white rounded-md text-xs"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => setEdit(true)}
                            className="hover:bg-indigo-600 bg-indigo-500 p-2 text-white rounded-md text-xs"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
