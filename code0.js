gdjs.GameplayCode = {};
gdjs.GameplayCode.GDCloudObjects1= [];
gdjs.GameplayCode.GDCloudObjects2= [];
gdjs.GameplayCode.GDCloudObjects3= [];
gdjs.GameplayCode.GDPlayerObjects1= [];
gdjs.GameplayCode.GDPlayerObjects2= [];
gdjs.GameplayCode.GDPlayerObjects3= [];
gdjs.GameplayCode.GDGrassPlatformObjects1= [];
gdjs.GameplayCode.GDGrassPlatformObjects2= [];
gdjs.GameplayCode.GDGrassPlatformObjects3= [];
gdjs.GameplayCode.GDSmallBridgeObjects1= [];
gdjs.GameplayCode.GDSmallBridgeObjects2= [];
gdjs.GameplayCode.GDSmallBridgeObjects3= [];
gdjs.GameplayCode.GDCoinObjects1= [];
gdjs.GameplayCode.GDCoinObjects2= [];
gdjs.GameplayCode.GDCoinObjects3= [];
gdjs.GameplayCode.GDScoreTextObjects1= [];
gdjs.GameplayCode.GDScoreTextObjects2= [];
gdjs.GameplayCode.GDScoreTextObjects3= [];
gdjs.GameplayCode.GDSlimeObjects1= [];
gdjs.GameplayCode.GDSlimeObjects2= [];
gdjs.GameplayCode.GDSlimeObjects3= [];
gdjs.GameplayCode.GDLeftObjects1= [];
gdjs.GameplayCode.GDLeftObjects2= [];
gdjs.GameplayCode.GDLeftObjects3= [];
gdjs.GameplayCode.GDRightObjects1= [];
gdjs.GameplayCode.GDRightObjects2= [];
gdjs.GameplayCode.GDRightObjects3= [];
gdjs.GameplayCode.GDCheckpointObjects1= [];
gdjs.GameplayCode.GDCheckpointObjects2= [];
gdjs.GameplayCode.GDCheckpointObjects3= [];
gdjs.GameplayCode.GDDeadTileObjects1= [];
gdjs.GameplayCode.GDDeadTileObjects2= [];
gdjs.GameplayCode.GDDeadTileObjects3= [];
gdjs.GameplayCode.GDUpButtonObjects1= [];
gdjs.GameplayCode.GDUpButtonObjects2= [];
gdjs.GameplayCode.GDUpButtonObjects3= [];
gdjs.GameplayCode.GDDownButtonObjects1= [];
gdjs.GameplayCode.GDDownButtonObjects2= [];
gdjs.GameplayCode.GDDownButtonObjects3= [];
gdjs.GameplayCode.GDLeftButtonObjects1= [];
gdjs.GameplayCode.GDLeftButtonObjects2= [];
gdjs.GameplayCode.GDLeftButtonObjects3= [];
gdjs.GameplayCode.GDRightButtonObjects1= [];
gdjs.GameplayCode.GDRightButtonObjects2= [];
gdjs.GameplayCode.GDRightButtonObjects3= [];
gdjs.GameplayCode.GDDeathObjects1= [];
gdjs.GameplayCode.GDDeathObjects2= [];
gdjs.GameplayCode.GDDeathObjects3= [];
gdjs.GameplayCode.GDCoinCollectedObjects1= [];
gdjs.GameplayCode.GDCoinCollectedObjects2= [];
gdjs.GameplayCode.GDCoinCollectedObjects3= [];
gdjs.GameplayCode.GDReplayObjects1= [];
gdjs.GameplayCode.GDReplayObjects2= [];
gdjs.GameplayCode.GDReplayObjects3= [];
gdjs.GameplayCode.GDUserLabObjects1= [];
gdjs.GameplayCode.GDUserLabObjects2= [];
gdjs.GameplayCode.GDUserLabObjects3= [];
gdjs.GameplayCode.GDUserTextInputObjects1= [];
gdjs.GameplayCode.GDUserTextInputObjects2= [];
gdjs.GameplayCode.GDUserTextInputObjects3= [];
gdjs.GameplayCode.GDLeaderboardBtnObjects1= [];
gdjs.GameplayCode.GDLeaderboardBtnObjects2= [];
gdjs.GameplayCode.GDLeaderboardBtnObjects3= [];


gdjs.GameplayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.GameplayCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.GameplayCode.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpButton"), gdjs.GameplayCode.GDUpButtonObjects2);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Controller");
}{for(var i = 0, len = gdjs.GameplayCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDLeftButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDRightButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDUpButtonObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDUpButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


};gdjs.GameplayCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.GameplayCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects2[0].getPointX("")), (0.05 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))), "", 0);
}}

}


{



}


{



}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs.GameplayCode.GDLeftButtonObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs.GameplayCode.GDRightButtonObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDUpButtonObjects1Objects = Hashtable.newFrom({"UpButton": gdjs.GameplayCode.GDUpButtonObjects1});
gdjs.GameplayCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.GameplayCode.GDLeftButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeftButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.GameplayCode.GDRightButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDRightButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpButton"), gdjs.GameplayCode.GDUpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDUpButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDDeadTileObjects1Objects = Hashtable.newFrom({"DeadTile": gdjs.GameplayCode.GDDeadTileObjects1});
gdjs.GameplayCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeadTile"), gdjs.GameplayCode.GDDeadTileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDDeadTileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}}

}


};gdjs.GameplayCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects1[k] = gdjs.GameplayCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameplayCode.GDCoinObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinCollectedObjects2Objects = Hashtable.newFrom({"CoinCollected": gdjs.GameplayCode.GDCoinCollectedObjects2});
gdjs.GameplayCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameplayCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDCoinObjects2 */
gdjs.GameplayCode.GDCoinCollectedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCoinCollectedObjects2Objects, (( gdjs.GameplayCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDCoinObjects2[0].getCenterXInScene()), (( gdjs.GameplayCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDCoinObjects2[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameplayCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameplayCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.GameplayCode.GDSlimeObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.GameplayCode.GDLeftObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.GameplayCode.GDSlimeObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.GameplayCode.GDRightObjects1});
gdjs.GameplayCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeadTile"), gdjs.GameplayCode.GDDeadTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.GameplayCode.GDLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.GameplayCode.GDRightObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDLeftObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDLeftObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameplayCode.GDRightObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDRightObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameplayCode.GDDeadTileObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDDeadTileObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDSlimeObjects2[i].getVariableString(gdjs.GameplayCode.GDSlimeObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDSlimeObjects2[k] = gdjs.GameplayCode.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSlimeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects2[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.GameplayCode.GDLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDLeftObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects2[i].returnVariable(gdjs.GameplayCode.GDSlimeObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDSlimeObjects2[i].getVariableString(gdjs.GameplayCode.GDSlimeObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDSlimeObjects2[k] = gdjs.GameplayCode.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSlimeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects2[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.GameplayCode.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects1[i].returnVariable(gdjs.GameplayCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects1[i].flipX(false);
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.GameplayCode.GDSlimeObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDDeathObjects2Objects = Hashtable.newFrom({"Death": gdjs.GameplayCode.GDDeathObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.GameplayCode.GDSlimeObjects2});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects1});
gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.GameplayCode.GDCheckpointObjects1});
gdjs.GameplayCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */
gdjs.GameplayCode.GDDeathObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDDeathObjects2Objects, (( gdjs.GameplayCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameplayCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.GameplayCode.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDSlimeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */
/* Reuse gdjs.GameplayCode.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSlimeObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(10);
}{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 5, 5, "", 0, 0.5, 2, 3, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.GameplayCode.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDPlayerObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_9546GameplayCode_9546GDCheckpointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameplayCode.GDCheckpointObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.GameplayCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.GameplayCode.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDCheckpointObjects1[0].getPointY("")));
}}

}


};gdjs.GameplayCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameplayCode.eventsList0(runtimeScene);
}


{


gdjs.GameplayCode.eventsList1(runtimeScene);
}


{


gdjs.GameplayCode.eventsList2(runtimeScene);
}


{


gdjs.GameplayCode.eventsList3(runtimeScene);
}


{


gdjs.GameplayCode.eventsList4(runtimeScene);
}


{


gdjs.GameplayCode.eventsList5(runtimeScene);
}


{


gdjs.GameplayCode.eventsList6(runtimeScene);
}


{


gdjs.GameplayCode.eventsList7(runtimeScene);
}


{



}


{



}


};

gdjs.GameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameplayCode.GDCloudObjects1.length = 0;
gdjs.GameplayCode.GDCloudObjects2.length = 0;
gdjs.GameplayCode.GDCloudObjects3.length = 0;
gdjs.GameplayCode.GDPlayerObjects1.length = 0;
gdjs.GameplayCode.GDPlayerObjects2.length = 0;
gdjs.GameplayCode.GDPlayerObjects3.length = 0;
gdjs.GameplayCode.GDGrassPlatformObjects1.length = 0;
gdjs.GameplayCode.GDGrassPlatformObjects2.length = 0;
gdjs.GameplayCode.GDGrassPlatformObjects3.length = 0;
gdjs.GameplayCode.GDSmallBridgeObjects1.length = 0;
gdjs.GameplayCode.GDSmallBridgeObjects2.length = 0;
gdjs.GameplayCode.GDSmallBridgeObjects3.length = 0;
gdjs.GameplayCode.GDCoinObjects1.length = 0;
gdjs.GameplayCode.GDCoinObjects2.length = 0;
gdjs.GameplayCode.GDCoinObjects3.length = 0;
gdjs.GameplayCode.GDScoreTextObjects1.length = 0;
gdjs.GameplayCode.GDScoreTextObjects2.length = 0;
gdjs.GameplayCode.GDScoreTextObjects3.length = 0;
gdjs.GameplayCode.GDSlimeObjects1.length = 0;
gdjs.GameplayCode.GDSlimeObjects2.length = 0;
gdjs.GameplayCode.GDSlimeObjects3.length = 0;
gdjs.GameplayCode.GDLeftObjects1.length = 0;
gdjs.GameplayCode.GDLeftObjects2.length = 0;
gdjs.GameplayCode.GDLeftObjects3.length = 0;
gdjs.GameplayCode.GDRightObjects1.length = 0;
gdjs.GameplayCode.GDRightObjects2.length = 0;
gdjs.GameplayCode.GDRightObjects3.length = 0;
gdjs.GameplayCode.GDCheckpointObjects1.length = 0;
gdjs.GameplayCode.GDCheckpointObjects2.length = 0;
gdjs.GameplayCode.GDCheckpointObjects3.length = 0;
gdjs.GameplayCode.GDDeadTileObjects1.length = 0;
gdjs.GameplayCode.GDDeadTileObjects2.length = 0;
gdjs.GameplayCode.GDDeadTileObjects3.length = 0;
gdjs.GameplayCode.GDUpButtonObjects1.length = 0;
gdjs.GameplayCode.GDUpButtonObjects2.length = 0;
gdjs.GameplayCode.GDUpButtonObjects3.length = 0;
gdjs.GameplayCode.GDDownButtonObjects1.length = 0;
gdjs.GameplayCode.GDDownButtonObjects2.length = 0;
gdjs.GameplayCode.GDDownButtonObjects3.length = 0;
gdjs.GameplayCode.GDLeftButtonObjects1.length = 0;
gdjs.GameplayCode.GDLeftButtonObjects2.length = 0;
gdjs.GameplayCode.GDLeftButtonObjects3.length = 0;
gdjs.GameplayCode.GDRightButtonObjects1.length = 0;
gdjs.GameplayCode.GDRightButtonObjects2.length = 0;
gdjs.GameplayCode.GDRightButtonObjects3.length = 0;
gdjs.GameplayCode.GDDeathObjects1.length = 0;
gdjs.GameplayCode.GDDeathObjects2.length = 0;
gdjs.GameplayCode.GDDeathObjects3.length = 0;
gdjs.GameplayCode.GDCoinCollectedObjects1.length = 0;
gdjs.GameplayCode.GDCoinCollectedObjects2.length = 0;
gdjs.GameplayCode.GDCoinCollectedObjects3.length = 0;
gdjs.GameplayCode.GDReplayObjects1.length = 0;
gdjs.GameplayCode.GDReplayObjects2.length = 0;
gdjs.GameplayCode.GDReplayObjects3.length = 0;
gdjs.GameplayCode.GDUserLabObjects1.length = 0;
gdjs.GameplayCode.GDUserLabObjects2.length = 0;
gdjs.GameplayCode.GDUserLabObjects3.length = 0;
gdjs.GameplayCode.GDUserTextInputObjects1.length = 0;
gdjs.GameplayCode.GDUserTextInputObjects2.length = 0;
gdjs.GameplayCode.GDUserTextInputObjects3.length = 0;
gdjs.GameplayCode.GDLeaderboardBtnObjects1.length = 0;
gdjs.GameplayCode.GDLeaderboardBtnObjects2.length = 0;
gdjs.GameplayCode.GDLeaderboardBtnObjects3.length = 0;

gdjs.GameplayCode.eventsList8(runtimeScene);

return;

}

gdjs['GameplayCode'] = gdjs.GameplayCode;
