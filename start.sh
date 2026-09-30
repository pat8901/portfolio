#!/bin/bash
# This script is used to start the server and client concurrently.

CWD=$(pwd)

start_server() {
    echo "Starting server..."
    DEBUG=portfolio:* npm --prefix "$CWD/server" start > /dev/null 2>&1 &
    echo "Starting client..."
    npm --prefix "$CWD/client" run dev > /dev/null 2>&1 &
}

start_server