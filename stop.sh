#!/bin/bash
# This script is used to start the server and client concurrently.

CWD=$(pwd)

stop_server() {
    echo "Stopping server..."
    killall "npm start"
    echo "Stopping client..."
    killall "npm run dev"
}

stop_server