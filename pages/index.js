import fs from 'fs';
import { LXDAOIntroduction } from 'lxdao-ui';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';

import { Box } from '@mui/material';

import Diploma from '../components/Diploma';
import Content from '../contents/Index';
import Main from '../layouts/Main';
import SectionFooter from '../sections/SectionFooter';
import SectionMyFirstProject from '../sections/SectionMyFirstProject';
import SectionSponsors from '../sections/SectionSponsors';
import SectionTeam from '../sections/SectionTeam';
import SectionTop from '../sections/SectionTop';
import { formatDirectory, getDocBySlug } from '/utils';

export default function Index({ content, directory }) {
  return (
    <Main>
      {/* <Diploma /> */}
      <SectionTop />
      <Content md={<MDXRemote {...content} file={directory} />} />
      <SectionMyFirstProject />
      <SectionSponsors />
      <SectionTeam />
      <Box marginBottom={4} paddingX={5}>
        <LXDAOIntroduction maxWidth="1240px" xsWidth="326px" />
      </Box>
      <SectionFooter />
    </Main>
  );
}

export async function getStaticProps({ locale }) {
  const directoryPath = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content');
  const files = fs.readdirSync(directoryPath);
  const fileNames = files.map((file) => file);
  const directory = formatDirectory(fileNames).filter((item) => item.text !== 'README' && item.text !== 'SUMMARY');

  const { content, meta } = getDocBySlug(directory[0]?.text, locale);
  const mdxSource = await serialize(content);
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
      content: mdxSource,
      meta,
      directory,
    },
  };
}
