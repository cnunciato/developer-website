import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useTessen, Link } from '@newrelic/gatsby-theme-newrelic';
import {
  SUPPORT_LINK,
  COMMUNITY_LINK,
  QUICKSTART_SUPPORT_LEVELS,
} from '../../data/constants';

const SupportSection = ({ supportLevel, quickstartName, quickstartId }) => {
  const tessen = useTessen();
  const supportLink = (
    <Link
      to={SUPPORT_LINK}
      key={QUICKSTART_SUPPORT_LEVELS.NEWRELIC}
      onClick={() =>
        tessen.track('instantObservability', 'QuickstartDetailsSupportClick', {
          quickstartName,
          quickstartId,
        })
      }
    >
      Visit our Support Center
    </Link>
  );

  const communityLink = (
    <Link
      to={COMMUNITY_LINK}
      key={QUICKSTART_SUPPORT_LEVELS.NEWRELIC}
      onClick={() =>
        tessen.track(
          'instantObservability',
          'QuickstartDetailsCommunityClick',
          {
            quickstartName,
            quickstartId,
          }
        )
      }
    >
      the Explorers Hub
    </Link>
  );

  const QUICKSTART_SUPPORT_CONTENT = {
    [QUICKSTART_SUPPORT_LEVELS.NEWRELIC]: {
      title: 'Built by New Relic',
      content: (
        <p>
          Need help? {supportLink} or check out our community forum,{' '}
          {communityLink}.
        </p>
      ),
    },
    [QUICKSTART_SUPPORT_LEVELS.VERIFIED]: {
      title: 'Verified by New Relic',
      content: (
        <p>
          Need help? Find the author's support resources under{' '}
          <strong>What's included</strong>. Or check out our community forum,{' '}
          {communityLink}.
        </p>
      ),
    },
    [QUICKSTART_SUPPORT_LEVELS.COMMUNITY]: {
      title: 'Built by the community',
      content: (
        <p>
          Need help? Visit our community forum, {communityLink} to find an
          answer or post a question.
        </p>
      ),
    },
  };

  return (
    <>
      <h5
        css={css`
          text-transform: uppercase;
        `}
      >
        {QUICKSTART_SUPPORT_CONTENT[`${supportLevel}`].title}
      </h5>
      {QUICKSTART_SUPPORT_CONTENT[`${supportLevel}`].content}
    </>
  );
};

SupportSection.propTypes = {
  supportLevel: PropTypes.string.isRequired,
  quickstartName: PropTypes.string.isRequired,
  quickstartId: PropTypes.string.isRequired,
};

export default SupportSection;
