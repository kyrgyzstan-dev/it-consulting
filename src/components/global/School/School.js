import React from 'react';
import S_comment from "./School-comment/S_comment";
import S_hero from "./School-hero/S_hero";
import S_course from "./School-course/S_course";
import S_master from "./School-master/S_master";
import S_level from "./School-level/S_level";
import S_form from "./School-form/S_form";

const School = () => {
    return (
        <>
            <S_hero/>
            <S_course/>
            <S_master/>
            <S_level/>
            <S_comment/>
            <S_form/>
        </>
    );
};

export default School;