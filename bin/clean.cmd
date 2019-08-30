@echo off
cd /d %~dp0\..
git clean -xdf -e .env -e team-provider-info.json
