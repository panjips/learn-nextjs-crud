import React from 'react';

export const postData = async (data) => {
    const res = await fetch('https://v1.appbackend.io/v1/rows/2HlSUCrnvOMu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([data])
    });
    const result = await res.json();
    return result;
};

export const getData = async () => {
    const res = await fetch('https://v1.appbackend.io/v1/rows/2HlSUCrnvOMu');
    const result = await res.json();
    return result;
};

export const deleteData = async (id) => {
    const res = await fetch('https://v1.appbackend.io/v1/rows/2HlSUCrnvOMu', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([id])
    });
    const result = res.json();
    return result;
};

export const editData = async (data) => {
    const res = await fetch('https://v1.appbackend.io/v1/rows/2HlSUCrnvOMu', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    return result;
};
