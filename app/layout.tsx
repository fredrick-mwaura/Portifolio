// app/layout.js
import '@/app/ui/global.css';
import React from "react";
import Head from "next/head";

export default function RootLayout({ children, }: { children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <Head>
            {/* Bootstrap CSS */}
            <link
                href={"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"}
                rel="stylesheet"
                integrity="sha384-DyZvFh4zjYlS1HqM+Y8F3c3G4n1s2w5X6hU6c3bqO4G6tZ9E8Rz7nD6/4Qy9aKx"
                crossOrigin="anonymous"
            />
            {/* Bootstrap JS */}
            <script
                src={"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"}
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"
            ></script>
        </Head>
        <body>{children}</body>
        </html>
    );
}