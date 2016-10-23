<?php
/**
 * Created by PhpStorm.
 * User: wencai
 * Date: 2016/10/22
 * Time: 下午9:50
 */
$user = json_decode(file_get_contents('php://input'));

if ($user->email == '821272852@qq.com' && $user->password == '123') {

    print 'success';

} else {

    print "error";
}

?>