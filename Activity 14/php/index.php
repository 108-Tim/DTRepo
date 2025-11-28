<!-- This file was located under C:\xampp\htdocs\api -->
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$jokesAndTrivias = [
  [
    "index0" => "Did you hear there is a coin shortage in America?We're running out of common cents",
    "index1" => "Did you hear about the guy who got hit in the head with a can of soda?He was lucky it was a soft drink",
    "index2" => "What is the best thing about living in Switzerland?Well, the flag is a big plus",
    "index3" => "Why did the golfer bring two pairs of pants?In case he got a hole in one",
    "index4" => "What do you call a bear with no teeth?A gummy bear",
    "index5" => "How many words in the English language end in “dous”?Hazardous, horrendous, tremendous and stupendous",
    "index6" => "What is the British word for a toilet?Loo",
    "index7" => "How many months have 28 days?All of them",
    "index8" => "People who suffer from hippopotomonstrosesquippedaliophobia have a fear of what?Long words",
    "index9" => "What is a group of pandas called?An embarrassment",
  ]
];

$response = [
  "status" => "success",
  "message" => "Data list fetched successsfully.",
  "data" => $jokesAndTrivias,
];

echo json_encode($response);
?>