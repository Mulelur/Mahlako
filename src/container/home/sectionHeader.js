import React from "react";
import { SectionHeader } from "../../components";
import cv from "../../assets/cv/matsokotsa.pdf";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4> Greeting</SectionHeader.Heading4>
        <SectionHeader.Text>
          I'm Mahlako,a 19 year old from Limpopo. Currently residing at vaal due
          to studies. I'm studying Chemical Engineering at VUT. I'm passionate
          about helping other hence I chose chemical engineering to study.
        </SectionHeader.Text>
        <SectionHeader.Download href={cv} target="_blank">
          DownLoad CV
        </SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
