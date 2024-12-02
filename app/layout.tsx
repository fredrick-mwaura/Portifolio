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
            {/* Font Awesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
                integrity="sha512-KI5gJ9J7UgHC+uUXVbmjpjpEW3A3Ds5Q7ZLFQB/6LuOSfBtQRmilKaM2hDz2O8wvwYPTBXcIFsYMW30kIZTY="
                crossOrigin="anonymous"
            />

            <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/js/all.min.js"
                    integrity="sha512-KJ3v8TnIAZpKZ0ktCEHDgqlYDCNJxWmfpCaXgVIAHIvQ85wLT72XOWieLwiaVGv2lEMWwpbDnKYr4wkYQ6c/RQ=="
                    crossOrigin="anonymous">

        </script>

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