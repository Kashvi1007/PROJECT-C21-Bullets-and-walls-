function hasCollided(lbullet, Lwall){

    lbulletRightEdge = lbullet.x+lbullet.width;
    LwallLeftEdge = Lwall.x-Lwall.width;

    if(lbulletRightEdge>=LwallLeftEdge){
        return true;
    }
    return false;


}