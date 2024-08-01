#!/usr/bin/env python3
"""
Filter log message obfuscating fields.
"""

import re
from typing import List


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """
    Obfuscate fields in log message.

    :param fields: fields to obfuscate
    :param redaction: obfuscation string
    :param message: log message
    :param separator: field separator
    :return: obfuscated message
    """
    pattern = '|'.join([f'{field}=[^{separator}]*' for field in fields])
    return re.sub(pattern, lambda m: m.group().split('=')[0] + '=' + redaction,
                  message)
