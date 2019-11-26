echo off

set address = 192.168.5.33

if "%~1" == "" goto blank
if "%~1" == "work" (
  echo Setting work address
  set address=192.168.5.33
)

if "%~1" == "kazimir" (
  echo Setting Kazimir address
  set address=192.168.43.181
)

if "%~1" == "home" (
  echo Setting home address
  set address=192.168.0.29
)

if "%~1" == "waldo" (
  echo Setting Waldo temp address
  set address=192.168.1.192
)

if "%~1" == "techdays" (
  echo Setting TechDays temp address
  set address=10.115.0.109
)

echo Setting address to %address%
set REACT_NATIVE_PACKAGER_HOSTNAME=%address%
yarn start
REM expo start --offline
goto done

:blank
echo You you must specify either "home" or "work" parameter
:done