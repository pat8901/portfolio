#!/bin/bash
# This script is used to start the server and client concurrently.

CWD=$(pwd)

stop_server() {
    echo "Stopping server..."
    kill -9 $(lsof -t -i:3000)
    echo "Stopping client..."
    kill -9 $(lsof -t -i:5173)
}

stop_server