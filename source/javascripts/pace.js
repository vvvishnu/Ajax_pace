.pace {
    -webkit - pointer - events: none;
    pointer - events: none;

    - webkit - user - select: none; - moz - user - select: none;
    user - select: none;

    z - index: 2000;
    position: fixed;
    height: 90 px;
    width: 90 px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.pace.pace - inactive.pace - activity {
    display: none;
}

.pace.pace - activity {
    position: fixed;
    z - index: 2000;
    display: block;
    position: absolute;
    left: -30 px;
    top: -30 px;
    height: 90 px;
    width: 90 px;
    display: block;
    border - width: 30 px;
    border - style: double;
    border - color: #29d transparent transparent;
  border-radius: 50%;

  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  -o-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.pace .pace-activity:before {
  content: ' ';
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
  display: block;
  border-width: 10px;
  border-style: solid;
  border-color: # 29 d transparent transparent;
    border - radius: 50 % ;
}

@ - webkit - keyframes spin {
    100 % {-webkit - transform: rotate(359 deg); }
}

@ - moz - keyframes spin {
    100 % {-moz - transform: rotate(359 deg); }
}

@ - o - keyframes spin {
    100 % {-moz - transform: rotate(359 deg); }
}

@keyframes spin {
    100 % { transform: rotate(359 deg); }
}