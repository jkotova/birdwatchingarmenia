export const setSettingsToSvgCode = (color: string, stroke: string) =>
  `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" enable-background="new 0 0 1024 1024" viewBox="384.96 147.51 215.15 653.9" xmlns:bx="https://boxy-svg.com" width="215.15px" height="653.9px"><defs/><path fill="${color}" fill-opacity="0.8" opacity="1.000000" stroke="${stroke}" stroke-width="0" d="M 443.387 717.078 C 431.323 711.707 419.05 712.812 406.683 715.807 C 402.714 716.768 398.778 718.111 394.522 717.433 C 405.411 713.188 416.689 710.144 428.399 711.018 C 440.178 711.897 451.314 716.021 462.344 720.203 C 453.496 711.924 440.876 712.912 430.663 707.309 C 434.802 705.662 438.442 708.072 442.261 708.125 C 428.648 702.126 414.602 699.35 399.814 702.084 C 420.59 694.887 439.017 702.954 458.187 712.507 C 456.441 708.942 454.326 707.766 452.232 706.59 C 445.81 702.984 438.819 700.716 431.981 698.108 C 420.975 693.911 411.029 687.925 401.85 680.623 C 400.082 679.216 398.112 677.844 397.041 674.091 C 407.989 682.761 418.458 690.117 431.691 692.041 C 421.185 683.95 409.687 677.12 400.877 666.905 C 411.373 674.285 422.594 680.186 434.639 684.997 C 418.165 670.862 403.66 655.161 393.78 635.503 C 408.769 651.983 426.3 665.088 445.9 675.584 C 440.832 671.019 435.586 666.635 430.728 661.857 C 413.272 644.683 402.033 624.416 397.853 599.902 C 390.937 559.346 383.941 518.863 385.755 477.479 C 386.036 471.087 386.698 464.711 387.271 457.179 C 396.581 462.511 403.2 469.749 413.124 474.346 C 409.971 470.612 407.711 467.827 405.338 465.143 C 394.003 452.319 390.77 437.745 392.93 420.683 C 398.381 377.635 411.359 336.603 424.401 295.534 C 429.94 278.093 434.12 260.195 441.705 243.44 C 444.59 237.069 447.597 230.751 451.723 225.034 C 455.097 220.358 455.554 220.323 459.046 225.166 C 462.932 230.554 466.529 236.17 472.044 240.618 C 470.725 236.688 469.927 232.479 467.996 228.877 C 460.381 214.67 463.904 202.422 472.902 190.113 C 484.569 174.153 498.992 161.264 514.54 149.384 C 517.391 147.205 519.496 147.821 522.041 149.861 C 536.15 161.172 546.347 175.569 553.628 191.823 C 565.518 218.366 573.176 246.263 578.389 274.871 C 581.653 292.779 583.319 310.784 583.392 328.972 C 583.405 332.286 582.621 335.116 580.907 337.917 C 574.977 347.607 567.9 356.406 559.648 365.363 C 570.206 362.099 577.573 354.512 587.833 350.664 C 589.199 357.849 591.523 364.514 587.998 371.176 C 582.045 382.43 574.323 392.46 565.876 401.95 C 564.797 403.163 563.316 404.107 562.702 406.92 C 573.796 400.351 582.974 392.374 592.993 384.909 C 595.751 390.408 595.475 395.666 596.056 400.636 C 597.117 409.718 597.678 418.875 598.078 428.016 C 599.845 468.495 598.39 508.978 597.935 549.455 C 597.669 573.026 595.231 596.334 586.387 618.516 C 583.24 626.411 578.075 633.698 575.781 641.554 C 572.744 651.955 565.419 658.993 560.44 668.041 C 564.531 666.459 567.082 662.509 571.558 661.404 C 558.751 673.203 546.894 685.781 536.017 700.837 C 544.043 694.72 551.236 689.237 558.43 683.754 C 556.151 688.648 551.425 691.128 547.875 694.757 C 538.784 704.053 527.163 709.062 515.671 714.34 C 510.389 716.766 505.859 720.311 501.297 723.805 C 516.093 717.18 531.388 711.5 544.338 699.276 C 542.896 703.859 533.416 712.292 528.374 714.773 C 521.842 717.987 514.68 719.839 507.355 724.412 C 521.944 720.338 535.789 718.992 549.074 714.936 C 548.108 716.981 546.198 716.674 544.846 717.453 C 542.522 718.791 538.483 717.735 538.137 722.163 C 538.102 722.609 535.781 722.981 534.489 723.206 C 528.342 724.278 522.184 725.288 516.06 726.895 C 530.8 725.426 545.494 721.087 560.292 726.525 C 548.525 726.484 536.668 725.033 524.85 729.097 C 528.753 733.393 534.83 734.994 537.783 741.459 C 532.31 737.743 527.869 734.195 522.952 731.524 C 516.846 728.207 512.008 732.912 506.712 735.131 C 521.611 735.896 533.922 742.726 545.719 750.843 C 534.502 747.506 525.004 739.17 512.397 739.257 C 512.532 741.81 515.125 741.917 516.052 744.451 C 513.134 743.255 510.736 742.236 508.31 741.287 C 505.12 740.039 501.764 740.181 498.436 740.28 C 496.687 740.332 494.895 740.889 494.645 742.846 C 494.354 745.131 496.483 745.067 497.985 745.708 C 507.892 749.936 516.179 756.375 523.13 764.666 C 514.078 758.776 506.049 751.2 494.934 747.517 C 493.543 753.951 494.991 759.735 495.581 765.332 C 497.483 783.36 499.299 784.465 494.75 790.393 C 486.344 801.347 484.32 799.588 482.721 785.868 C 481.51 775.48 480.623 765.055 479.466 753.37 C 473.306 764.929 471.281 776.348 470.206 789.067 C 467.3 781.502 469.792 768.31 476.74 752.591 C 466.881 760.881 460.139 770.723 450.674 777.724 C 459.298 766.483 468.911 756.141 478.568 745.712 C 468.559 750.588 459.585 756.867 451.152 764.057 C 457.121 753.776 468.083 749.209 477.883 741.199 C 469.483 741.846 462.651 743.438 455.987 745.844 C 449.086 748.336 445.942 754.993 441.135 759.784 C 446.046 744.136 459.119 740.769 472.773 738.13 C 445.53 734.061 425.747 745.757 410.704 767.897 C 416.022 755.628 424.92 746.864 436.422 740.884 C 447.794 734.971 459.725 731.028 472.891 734.519 C 460.067 726.401 446.75 728.307 433.196 732.068 C 419.35 735.91 410.14 745.735 401.173 755.933 C 411.291 737.2 427.883 728.615 448.37 726.116 C 426.149 721.62 409.492 732.116 394.379 746.757 C 402.106 730.04 417.036 725.494 432.963 722.705 C 440.273 721.425 447.557 721.899 454.795 723.553 C 456.332 723.904 457.969 724.65 460.666 723.455 C 456.089 720.091 451.315 719.209 446.049 717.803 C 444.744 717.412 444.066 717.245 443.387 717.078 M 492.395 512.833 C 492.014 517.465 491.486 522.091 491.293 526.731 C 491.105 531.283 490.392 535.908 491.56 541.665 C 496.952 530.344 500.751 488.022 496.887 483.432 C 493.293 492.816 493.832 502.527 492.395 512.833 Z"/></svg>`;

export const convertSvgCodeToDatUrl = (svg: string) =>
  "data:image/svg+xml;base64," + window.btoa(svg);

export const normalizeDataForFeatherPlot = (data) => {
  const normalized = {};
  Object.keys(data).map((key) => {
    normalized[key] = {
      January: {
        first: 0,
        second: 0,
      },
      February: {
        first: 0,
        second: 0,
      },
      March: {
        first: 0,
        second: 0,
      },
      April: {
        first: 0,
        second: 0,
      },
      May: {
        first: 0,
        second: 0,
      },
      June: {
        first: 0,
        second: 0,
      },
      July: {
        first: 0,
        second: 0,
      },
      August: {
        first: 0,
        second: 0,
      },
      September: {
        first: 0,
        second: 0,
      },
      October: {
        first: 0,
        second: 0,
      },
      November: {
        first: 0,
        second: 0,
      },
      December: {
        first: 0,
        second: 0,
      },
    };
    Object.keys(data[key]).map((month) => {
      Object.keys(data[key][month]).map((half) => {
        normalized[key][month][half] = data[key][month][half];
      });
    });
  });
  return normalized;
};

export const getFeatherSettingsByValue = (value: number) => {
  if (value < 2) {
    return ["#A3D1C600", "#85b8ac00", 55, 70];
  } else if (value < 100) {
    return ["#a8d3bc", "#82b298", 40, 50];
  } else if (value < 500) {
    return ["#aed6b2", "#80ac85", 45, 60];
  } else if (value < 1000) {
    return ["#B3D8A8", "#7da671", 50, 80];
  } else if (value < 2000) {
    return ["#8cbf99", "#608d66", 45, 100];
  } else if (value < 3000) {
    return ["#64a689", "#42755a", 45, 125];
  } else {
    return ["#3D8D7A", "#255c4f", 50, 145];
  }
};

export const getClassNameByBirdsAmount = (amount: number): string => {
  if (amount > 50) {
    return "good";
  } else if (amount > 10) {
    return "medium";
  }
  return "bad";
};

export const getClassNameByLastViewed = (date: string): string => {
  const observation_date = +new Date(date);
  const today = +new Date();
  const difference = Math.floor(
    Math.abs(today - observation_date) / (1000 * 60 * 60 * 24)
  );
  if (difference > 360) {
    return "medium";
  } else if (difference > 720) {
    return "bad";
  }
  return "good";
};
