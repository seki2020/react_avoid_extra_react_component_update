# react_avoid_extra_react_component_update
Created with CodeSandbox

背景：
加入容器组件内部有a b两个子组件，a组件的更新会导致b组件的冗余更新。

我需要解决两个问题：
1. 避免容器组件的更新，导致 未被触及的某个子组件的冗余更新。
2. 显示隐藏后，保留某个组件实例内部的state状态，而不是每次都初始化。
