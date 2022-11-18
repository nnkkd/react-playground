import { Link } from "react-router-dom";
import { Layout } from "../components/layouts/Layouts";
import { useEffect, useState } from 'react';

export const Home = () => {
    return (
        <>
            <Layout title='toppage'>
                <div>
                    <Link to={'/useState-effect'}>go to useState,Effect playground</Link>
                </div>
            </Layout>
        </>
    )
}


// ハンバーガーメニューUI表示
// useStateで状態管理
// クリックしたら状態を変更
// 