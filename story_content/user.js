window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoScrollControl);
} else {
    initVideoScrollControl();
}
}

};
