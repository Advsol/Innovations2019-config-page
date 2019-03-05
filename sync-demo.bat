@echo Off

SET mypath=%~dp0
SET mypath=%mypath%dist\config-page\
echo %mypath:~0,-1%

"%ProgramFiles(x86)%\Microsoft SDKs\Azure\AzCopy\AzCopy.exe" /source:%mypath% /Dest:https://asiprostorage.blob.core.windows.net/innovations/config-demo /SetContentType /Y /XO /S /DestKey:[removed]